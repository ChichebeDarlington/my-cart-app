import { FaCartPlus} from "react-icons/fa"

const IsLoading = () => {
  return (
    <div className="isloading">
        <p>Please wait...</p>
        <h1>Your App is loading</h1>
        <FaCartPlus className="isloading-icon"/>
    </div>
  )
}

export default IsLoading