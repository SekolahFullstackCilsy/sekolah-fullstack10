import Footer from "../components/Footer"
import Menu from "../components/Menu"

const withTemplate = (WrappedComponent) => {
  return (props) => (
    <div>
      <Menu />
      <WrappedComponent {...props} />
      <Footer />
    </div>
  )
}

export {withTemplate}