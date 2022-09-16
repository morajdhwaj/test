import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps  }  />


}
export default MyApp
export  function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
