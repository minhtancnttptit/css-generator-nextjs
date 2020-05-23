import utilStyles from '../../../styles/utils.module.css'
import { useState } from 'react'
import ColorPicker from './color-picker'

function Preview({ css }) {
  const [color, setColor] = useState('#3d9df6')
  const onChangeColor = (color) => {
    setColor(color.hex)
  }

  // const {scale, rotate, }

  const previewBoxStyle = {
    backgroundColor: color,
    transform: css[0],
    transformOrigin: css[1],
  }

  return (
    <>
      <h2>Preview</h2>
      <div className={utilStyles.row}>
        <div className={utilStyles.column}>
          <div className={utilStyles.previewTransform}>
            <div className={utilStyles.previewBox} style={previewBoxStyle}>
              Preview box
            </div>
          </div>
        </div>
        <div className={utilStyles.column}>
          <ColorPicker color={color} onChangeColor={onChangeColor} />
        </div>
      </div>
    </>
  )
}

export default Preview
