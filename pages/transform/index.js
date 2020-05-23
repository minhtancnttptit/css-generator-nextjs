import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Generator from './components/generator'
import Preview from './components/preview'
import CssCode from './components/css-code'

const DEFAULT = {
  scale: 1,
  rotate: 0,
  translateX: 0,
  translateY: 0,
  skewX: 0,
  skewY: 0,
  transformOriginX: 0,
  transformOriginY: 0,
}

class Transform extends React.Component {
  state = DEFAULT

  onChangeSlider = (value, name) => {
    const tmp = { ...this.state }
    tmp[name] = value
    this.setState(tmp)
  }

  onClickReset = () => {
    this.setState(DEFAULT)
  }

  getCss = () => {
    const {
      scale,
      rotate,
      translateX,
      translateY,
      skewX,
      skewY,
      transformOriginX,
      transformOriginY,
    } = this.state
    let result = []
    let tmp1 = ''
    let tmp2 = ''
    if (
      !(
        scale - 1 ||
        rotate ||
        translateX ||
        translateY ||
        transformOriginX ||
        transformOriginY
      )
    ) {
      tmp1 += 'none'
    } else {
      if (scale !== 1) {
        tmp1 += `scale(${scale}) `
      }
      if (rotate) {
        tmp1 += `rotate(${rotate}deg) `
      }
      if (translateX || translateY) {
        tmp1 += `translate(${translateX}px, ${translateY}px) `
      }
      if (skewX || skewY) {
        tmp1 += `skew(${skewX}deg, ${skewY}deg) `
      }
    }
    if (!(transformOriginX || transformOriginY)) {
      tmp2 += 'none'
    } else {
      tmp2 += `${transformOriginX}% ${transformOriginY}%`
    }
    result.push(tmp1)
    result.push(tmp2)
    return result
  }

  render() {
    const css = this.getCss()
    return (
      <Layout>
        <div className={utilStyles.row}>
          <div className={utilStyles.column}>
            <Generator
              css={css}
              onChangeSlider={this.onChangeSlider}
              onClickReset={this.onClickReset}
            />
          </div>
          <div className={utilStyles.column}>
            <Preview css={css} />
            <CssCode css={css} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Transform
