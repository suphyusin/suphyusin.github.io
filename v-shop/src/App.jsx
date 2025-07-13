 
import accessoryData from './accessory.json'
import DataTable from './components/DataTable' 
import {useForm} from "react-hook-form"
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useLocalStorage } from 'react-use';


function App() { 

  // For a component, it must return a single JSX element. 

  // So if you have multiple elements, you need to wrap them in a single element. 

  // You can use <>...</> to wrap multiple elements (only in JSX). 

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [selectedItems, setSelectedItems] = useLocalStorage(
  'selectedItems',
  [
    { id: 1, name: "Mouse", price: 10, quantity: 2 },
    { id: 2, name: "Keyboard", price: 20, quantity: 1 },
  ]
)

    // localStorage.setItem('selectedItems', JSON.stringify(selectedItems))
  // localStorage.setItem("name","Chayapol")
  const name = localStorage.getItem("name") 
  console.log(name)

  // const quantityRef = useRef() 

  // const productRef = useRef() 

  // const [selectedItems, setSelectedItems] = useState([])

  // const updatePrice = (e) => { 

  //   const productId = parseInt(e.target.value)   // Integer expected 

  //   const product = accessoryData.find(accessory => accessory.id === productId) 

  //   setPrice(product.price) 

  // } 

  // const handleSubmit = (e) => { 

  //   const productId = parseInt(productRef.current.value) 

  //   const product = accessoryData.find(accessory => accessory.id === productId) 

  //   const order = { 

  //     // id: product.id, 

  //     // name: product.name, 

  //     // price: product.price,  

  //     ...product, 

  //     quantity: quantityRef.current.value 

  //   } 

  //   console.table(order) 

  //   selectedItems.push(order) 
  //   // this does not update DataTable, why? 

  //   setSelectedItems([...selectedItems]) 
  // } 
  
  const onSubmit = (data) => {
    console.log(data)
    const productId = parseInt(data.product)
    const product = accessoryData.find(accessory => accessory.id === productId)
    const order = {
      ...product,
      quantity: data.quantity
    }
    selectedItems.push(order) // this does not update DataTable, why?
    setSelectedItems([...selectedItems])

  }

 return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product:
        <select
          // ref={productRef}
          {...register("product")}
        >
          {accessoryData.map((accessory, index) => {
            return (
              <option key={index} value={accessory.id}>{accessory.name} -- {accessory.price}</option>
            )
          }
          )
          }
        </select><br /> */}

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Product</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={productId}
            label="Product"
            {...register("product")}
          >
            {accessoryData.map((accessory, index) => {
              return (
                <MenuItem key={index} value={accessory.id}>{accessory.name} -- {accessory.price}</MenuItem>
              )
            })}

          </Select>
        </FormControl>

        <br />
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Quantity</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">#</InputAdornment>}
            label="Quantity"
            {...register("quantity")}
          />
        </FormControl>
        {/* Quantity: <input
          style={{ textAlign: 'right' }}
          type="number"
          // ref={quantityRef}
          {...register("quantity")} /> */}
        <br />
        <button type="submit">Submit</button>
      </form>

      <DataTable data={selectedItems} />
    </>
  )
}
export default App

