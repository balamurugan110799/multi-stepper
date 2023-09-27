import logo from './logo.svg';
import { useState } from 'react';
import { ToggleSwitch } from 'react-dragswitch'
import 'react-dragswitch/dist/index.css'
import './App.css';
import sideImage from "./components/multi-step-form-main/assets/images/bg-sidebar-desktop.svg"
import Arcade from "./components/multi-step-form-main/assets/images/icon-arcade.svg"
import Advanced from "./components/multi-step-form-main/assets/images/icon-advanced.svg"
import Pro from "./components/multi-step-form-main/assets/images/icon-pro.svg"

function App() {
  const [tabState, setTabState] = useState(1)
  const [checked,setCheckedValue] =useState(null)

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    plan:""
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    plan:""
  })

  const [errorshandle, setErrorshandle] = useState({
    name: "",
    email: "",
    phone: "",
    plan:""
  })


  const [handle, setHandle] = useState(false)
  const [handleSecond, setHandleSecond] = useState(false)
  const [monthYear,setMonthYear] = useState(false)


  const handleClick = (e) => {
    setTabState(e)
  }

  const [stateMagement, SetstateMagement] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetstateMagement((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
    setData({
      ...data,
      [name]: value
    })
  }

  if (handle === true) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (stateMagement?.name === undefined) {
      errors.name = "The Filed is required"
    } else if (stateMagement.name === "") {
      errors.name = "The Filed is required"
    } else {
      errors.name = true
    }

    if (stateMagement.email === undefined) {
      errors.email = "The Field is required"
    } else if (stateMagement.email === "") {
      errors.email = "The Filed is required"
    } else if (!regex.test(stateMagement.email)) {
      errors.email = "Vaild Mail"
    } else {
      errors.email = true
    }

    if (stateMagement.phone === undefined) {
      errors.phone = "The Field is required"
    } else if (stateMagement.phone === "") {
      errors.phone = "The Field is required"
    } else if (stateMagement.phone.length > 10 || stateMagement.phone.length < 10) {
      errors.phone = "Vaild Phone Number"
    } else {
      errors.phone = true
    }
  }

  if(handleSecond===true){
    if (stateMagement.plan === undefined) {
      errors.plan = "The Field is required"
    } else if (stateMagement.plan === "") {
      errors.plan = "The Field is required"
    } else {
      errors.plan = true
    }
  }
  const handleSubmitSecond = (e) =>{
    e.preventDefault();
    setHandleSecond(true)
    if(errors.plan===true){
      setTabState(3)
    }
  }

  const handleClickMY = () =>{
    setMonthYear(!monthYear)
  }

  const setChecked = (e)=>{
    // console.log(e.target.value)
    // setCheckedValue(!checked)
  }

  const handleSubmitFirst = (e) => {
    e.preventDefault();
    setHandle(true)
    console.log(data, errors)
    if (errors.phone === true && errors.email === true && errors.name === true) {
      setTabState(2)
    }
   
    handleChange(e)
  }

  return (
    <div className="App">
      <div className=' bg-white'>
        <div className='grid grid-cols-12 p-4'>
          <div className=' col-span-3'>

            <div className='relative'>
              <img src={sideImage} alt="Side Image" className='' />
              <div className='absolute top-0'>
                <div onClick={() => handleClick(1)}>
                  STEP 1
                </div>

                <div onClick={() => handleClick(2)}>
                  STEP 2
                </div>

                <div onClick={() => handleClick(3)}>
                  STEP 3
                </div>

                <div onClick={() => handleClick(4)}>
                  STEP 4
                </div>
              </div>

            </div>

          </div>
          <div className=' col-span-9  py-10'>
            <div className='px-16 w-[80%] mx-auto'>


              {tabState === 1 ?
                <div>
                  <form>
                    <h1 className=' text-marine-blue text-[32px] tracking-wider font-semibold'>Personal Info</h1>
                    <p className=' text-light-gray'>Please Provide your name, email address, and phone number</p>
                    <div className='py-10'>
                      <div className='pb-2'>
                        <div className='flex w-[100%]'>
                          <div className='w-[50%] flex justify-start'>
                            <p className=' text-marine-blue py-1'>
                              Name
                            </p>
                          </div>
                          <div className='w-[50%] flex justify-end'>
                            <p className='text-[#8b0000] text-[14px] pt-2'>
                              {errors.name}
                            </p>

                          </div>
                        </div>
                        <input type='text'
                          placeholder='Name'
                          name="name"
                          value={data.name}
                          id="name"
                          onChange={(e) => handleChange(e)}
                          className='border text-[18px] text-marine-blue placeholder:text-light-gray w-[100%] py-4 px-4 rounded-md' />

                      </div>
                      <div className='pb-2'>
                        <div className='flex w-[100%]'>
                          <div className='w-[50%] flex justify-start'>
                            <p className=' text-marine-blue py-1'>
                              Email Address
                            </p>
                          </div>
                          <div className='w-[50%] flex justify-end'>
                            <p className='text-[#8b0000] text-[14px] pt-2'>
                              {errors.email}
                            </p>
                          </div>
                        </div>
                        <input type='text'
                          placeholder='Email'
                          id="email"
                          name="email"
                          value={data.email}
                          onChange={(e) => handleChange(e)}
                          className='border text-marine-blue placeholder:text-light-gray w-[100%] py-4 px-4 rounded-md' />

                      </div>
                      <div className='pb-2'>
                        <div className='flex w-[100%]'>
                          <div className='w-[50%] flex justify-start'>
                            <p className=' text-marine-blue py-1'>
                              Phone
                            </p>
                          </div>
                          <div className='w-[50%] flex justify-end'>
                            <p className='text-[#8b0000] text-[14px] pt-2'>
                              {errors.phone}
                            </p>
                          </div>
                        </div>
                        <input type='number'
                          placeholder='phone'
                          id="phone"
                          value={data.phone}
                          name="phone"
                          onChange={(e) => handleChange(e)}
                          className='border text-marine-blue placeholder:text-light-gray w-[100%] py-4 px-4 rounded-md' />

                      </div>
                    </div>
                    <div className='grid grid-cols-3'>
                      <div className=' col-span-2'>

                      </div>
                      <div className=' col-span-1 flex justify-end'>
                        <button onClick={(e) => handleSubmitFirst(e)} className='hover:bg-pastel-blue bg-marine-blue py-2 px-8 rounded-md text-white'>Next Step</button>
                      </div>
                    </div>
                  </form>

                </div>




                : null}
              {tabState === 2 ? <div>

                <form>
                  <h1 className=' text-marine-blue text-[32px] tracking-wider font-semibold'>Select your plan</h1>
                  <p className=' text-light-gray'>you have the option of monthly or yearly billing.</p>

                  <div className='grid grid-cols-3 gap-6 py-10 pb-4'>

                    <label className={`${data.plan === "arcade" ? "activeBorder " :"" } border hover:activeBorder rounded-md cursor-pointer`}>
                      <div className=' px-4 p-4 '>
                        <input type="radio" className='' value="arcade" onChange={(e)=>handleChange(e)} id="arcade" name="plan" />
                        <img src={Arcade} alt="Arcade" className='pb-10' />
                        <p className='text-marine-blue font-semibold'>
                          Arcade
                        </p>
                        <p className=' text-light-gray'>
                          $9/mo
                        </p>
                      </div>
                    </label>

                    <label className={`${data.plan === "advanced" ? "activeBorder " :"" } border hover:activeBorder rounded-md cursor-pointer`}>
                    <div className='border rounded-md px-4 p-4'>
                    <input type="radio" className='' value="advanced" id="arcade"  onChange={(e)=>handleChange(e)} name="plan" />
                      <img src={Advanced} alt="Advanced" className='pb-10' />
                      <p className='text-marine-blue font-semibold'>
                        Advance
                      </p>
                      <p className=' text-light-gray'>
                        $9/mo
                      </p>
                    </div>   
                    </label>

               
                    <label className={`${data.plan === "pro" ? "activeBorder" :"" } border group-hover:activeBorder rounded-md cursor-pointer`}>
                    <div className='border rounded-md px-4 p-4 group'>
                    <input type="radio" className='pro'  value="pro" id="arcade"  onChange={(e)=>handleChange(e)}  name="plan" />
                      <img src={Pro} alt="Pro" className='pb-10' />
                      <p className='text-marine-blue font-semibold'>
                        Pro
                      </p>
                      <p className=' text-light-gray'>
                        $15/mo
                      </p>
                    </div>
                    </label>


        

                  </div>
                  <div onClick={()=>handleClickMY()}>
                      <div>
                        <div className='bg-marine-blue w-[40px] h-[20px] rounded-md relative'>
                        {/* {} */}
                        <div className={` ${monthYear ? "animation-left-moving left-1 bg-white absolute" :"animation-right-moving right-1 bg-[#fff] absolute" }   h-[10px] w-[10px]  borderRadius`}>

                        </div>
                        
                        {/* <div className="absolute animation-right-moving right-1 h-[10px] w-[10px] bg-white borderRadius">

                        </div> */}
                        {/* {monthYear ?"Hello":"Bye"} */}

                        </div>
                      </div>
                  </div>
                  <div className='flex w-[100%] pb-10'>
                          <div className='w-[50%] flex justify-start'>
                            <p className=' text-marine-blue py-1'>
                              
                            </p>
                          </div>
                          <div className='w-[50%] flex justify-end'>
                            <p className='text-[#8b0000] text-[14px] pt-2'>
                              {errors.plan}
                            </p>

                          </div>
                        </div>

                  
                  {/* {errors.plan} */}

                  <div className='grid grid-cols-3'>
                      <div className=' col-span-2'>

                      <label class="switch">
  <input type="checkbox" checked/>
  <span class="slider round"></span>
</label>

                      </div>
                      <div className=' col-span-1 flex justify-end'>
                        <button onClick={(e) => handleSubmitSecond(e)} className='hover:bg-pastel-blue bg-marine-blue py-2 px-8 rounded-md text-white'>Next Step</button>
                      </div>
                    </div>

                </form>
              </div> : null}

              {tabState === 3 ? <p>State 3</p> : null}

              {tabState === 4 ? <p>State 4</p> : null}


            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
