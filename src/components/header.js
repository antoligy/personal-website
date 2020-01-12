import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component, Suspense} from "react"
import promiseImageLoader from 'promise-image-loader'
import fetch from "isomorphic-fetch"


const ALink = ({url, children}) => {
  const isAbsolute = /^(https?:)?\/\//
  return isAbsolute.test(url) ? <a href={url}>{children}</a> : <Link to={url}>{children}</Link>
}

const NavItem = ({url, active, children}) => (
  <li className={`alex-header__nav-item ${active ? "alex-header__nav-item--active" : null}`}>
    <ALink url={url}>{children}</ALink>
  </li>
)

const NavSpacer = () => (
  <li className="alex-header__nav-item alex-header__nav-item--spacer"></li>
)

const Icon = ({src, title}) => (
  <img
    src={src}
    // onerror={`"this.src='https://imagecdn.app/v2/image/${encodeURIComponent(icon)}?format=png&width=90'"`}
    alt={title}
    className="large"
    height="1em"
  />
)

class HeaderImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      preloadedImage: undefined
    }
  }

  preloadImage(src) {
    const actualSrc = this.imageService(this.props.src, [])
    promiseImageLoader(new Image(actualSrc))
      .then(() => this.setState({
        preloadedImage: actualSrc
      }))
      .catch(() => {})
  }

  imageService(url, params = []) {
    return `https://imagecdn.app/v2/image/${encodeURIComponent(url)}?${params.join('&')}`
  }

  render() {
    return <div className={`alex-header-image`}>
      <picture className={`alex-header-image--container`}>
        <img
          className={`alex-header-image__blur`}
          onLoad={this.preloadImage.bind(this, this.props.src)}
          src={this.imageService(this.props.src, [
            'width=25',
            'height=10',
            'quality=low',
            'format=jpg'
          ])} />
        <img
          className={`alex-header-image__main`}
          src={this.state.preloadedImage}
          style={{
            opacity: this.state.preloadedImage !== undefined ? 1 : 0
          }}/>
      </picture>
    </div>
  }
}

class Header extends Component {

  constructor(props) {
    super(props)
    this.header = React.createRef()
    this.headerNav = React.createRef()
    this.state = {
      backgroundImage: props.image, // Is this bad?
      backgroundImageLoaded: false
    }
  }

  componentDidMount() {
    this.header.current.style.top = `-${this.header.current.offsetHeight - this.headerNav.current.offsetHeight}px`
    this.header.current.style.position = "sticky";

    if (!this.state.backgroundImage || this.state.backgroundImage === null) {
      this.fetchRandomImage()
    }
  }

  fetchRandomImage() {
    const params = [
      "format=json",
      "provider=custom-v1:http://random-images-v1.s3-website.eu-west-1.amazonaws.com"
    ]
    fetch(`https://random.responsiveimages.io/v1/image?${params.join('&')}`)
      .then(res => res.json())
      .then(image => {
        if (!image.url) return
        this.setState({
          backgroundImage: decodeURIComponent(image.url.replace('https://imagecdn.app/v1/images/', '').replace(/\?$/, ''))
        })
      })
      .catch(_ => null)
  }

  render() {
    const {pathname} = this.props.location

    return (
      <header role="banner" className={`alex-header`} ref={this.header}>

        <HeaderImage src={this.state.backgroundImage}/>

        <div className="alex-header--container">

          <div className="alex-header__about">
              <h1 className="alex-header__name">Alex Wilson</h1>
              <span className="alex-header__intro">Software Engineer, Technical Architect — Helping build a better, faster internet.</span>
          </div>


          <nav>
              <ul className="alex-header__nav" id="menu" ref={this.headerNav}>
                <NavItem url="/" active={pathname === "/"}>Home</NavItem>
                <NavItem url="/about-me/" active={pathname.startsWith("/about-me/")}>About Me</NavItem>
                <NavItem url="/blog/" active={pathname.startsWith("/blog/")}>Blog</NavItem>
                <NavItem url="/talks/" active={pathname.startsWith("/talks/")}>Talks</NavItem>
                <NavItem url="/consultancy/" active={pathname.startsWith("/consultancy/")}>Consultancy</NavItem>

                <NavSpacer />

                <NavItem url="https://twitter.com/antoligy"><Icon src="/svg/twitter.svg" title="Twitter" /></NavItem>
                <NavItem url="https://www.linkedin.com/in/alex-/"><Icon src="/svg/linkedin.svg" title="LinkedIn" /></NavItem>
                <NavItem url="https://github.com/antoligy"><Icon src="/svg/github.svg" title="Github" /></NavItem>
              </ul>
          </nav>

      </div>
    </header>)
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  image: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Alex Wilson`,
  image: null,
}

export default Header
