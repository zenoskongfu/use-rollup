import * as ReactDOM from 'react-dom/client'
import { Input, Logo } from 'rollup-build'
import CustomButton from './CustomButton.jsx'
import "rollup-build/dist/es/rollup-build.css"

const App = () => {
  return <div>
    App App App
    <CustomButton />
    <Input />
    <Logo />
  </div>
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
