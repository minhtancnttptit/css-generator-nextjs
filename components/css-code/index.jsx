export default function CssCode({ css }) {
  return (
    <>
      <h2>CSS code</h2>
      {`transfrom: ${css[0]};`}
      <br />
      {`transform-origin: ${css[1]};`}
    </>
  )
}
