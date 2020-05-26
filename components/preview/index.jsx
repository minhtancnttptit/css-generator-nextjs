import { useState } from 'react'
import ColorPicker from '../color-picker'
import styles from './preview.module.css'

function Preview({ css }) {
	const [color, setColor] = useState('#3d9df6')
	const onChangeColor = (color) => {
		setColor(color.hex)
	}

	const previewBoxStyle = {
		backgroundColor: color,
		transform: css[0],
		transformOrigin: css[1],
	}

	return (
		<>
			<h2>Preview</h2>
			<div className="row">
				<div className="column">
					<div className={styles.previewTransform}>
						<div className={styles.previewBox} style={previewBoxStyle}>
							Preview box
            </div>
					</div>
				</div>
				<div className="column">
					<ColorPicker color={color} onChangeColor={onChangeColor} />
				</div>
			</div>
		</>
	)
}

export default Preview
