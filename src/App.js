import logo from './logo.svg';
import './App.css';
import './Components/CSS/responsive.css';

import "./Components/CSS/style.css"
import sidebarDesktop from "./Components/assets/images/bg-sidebar-desktop.svg"
import sidebarMobile from "./Components/assets/images/bg-sidebar-mobile.svg"

import advanced from "./Components/assets/images/icon-advanced.svg"
import arcade from "./Components/assets/images/icon-arcade.svg"
import pro from "./Components/assets/images/icon-pro.svg"
import { useState } from 'react';
import "./Components/fields/ToggleSwitch.css"

function App() {

  const [tab, setTab] = useState(1)
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: null,
    plan: "",
    months: true,
    packages: ""
  })
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: null,
    plan: "",
    months: "",
    packages: ""
  })
  const [vaildfirst, setVaildFirst] = useState(false)
  const [vaildsec, setVaildSec] = useState(false)
  const [vaildThird, setVaildThird] = useState(false)

  const [add, setAdd] = useState(false)
  const [packages, setPackages] = useState([
    { id: 0, name: "Online Services", des: "Access to multiplayers games", price_month: "+$1/mo", price_year: "+$1/ye", value: false },
    { id: 1, name: "Larger storage", des: "Extra 1TB of cloud save", price_month: "+$2/mo", price_year: "+$1/ye", value: false },
    { id: 2, name: "Customizable Profile", des: "Custom theme on your profile", price_month: "+$2/mo", price_year: "+$1/ye", value: false },
  ])



  const handleTab = (tabNumb) => {
    console.log(tabNumb)
    if (tabNumb === 1) {
      setTab(1)
    } else if (tabNumb === 2) {
      setTab(2)
    } else if (tabNumb === 3) {
      setTab(3)
    } else if (tabNumb === 4) {
      setTab(4)
    }
  }

  if (vaildfirst === true) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (data.name === "" || data.name === undefined) {
      error.name = "This field is required"
    } else {
      error.name = true
    }

    if (data.email === "" || data.email === undefined) {
      error.email = "Enter the Email"
    } else if (!regex.test(data.email)) {
      error.email = "vaild email required"
    } else {
      error.email = true
    }

    if (data.phone === "" || data.phone === undefined || data.phone === null) {
      error.phone = "This field is required"
    } else {
      error.phone = true
    }

  }

  if (vaildsec === true) {
    if (data.plan === "" || data.plan === undefined || data.plan === null) {
      error.plan = "This field is required"
    } else {
      error.plan = true
    }

    data.months = add
    console.log(add)

    if (data.months === "" || data.months === undefined || data.months === null) {
      error.months = "This field is required"
    } else {
      error.months = true
    }
  }


  if (vaildThird === true) {

    data.packages = packages
  }

  const handleChnage = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })
    console.log(data)
  }

  const [firstkey, setFirstKeys] = useState(false)
  const [secondkey, setSecondKeys] = useState(false)
  const [thirdkey, setThirdKeys] = useState(false)
  const [fourthkey, setFourthKeys] = useState(false)
  const [fivthkey, setFivthKeys] = useState(false)

  const handleNext = (e, next) => {
    e.preventDefault();
    if (next === 1) {
      setVaildFirst(true)
      if (error.name === true && error.email && error.phone) {
        setTab(2)
        setFirstKeys(true)
      }
    } else if (next === 2) {
      setVaildSec(true)
      if (error.plan === true) {
        setTab(3)
        setSecondKeys(true)
      }
      console.log(data)
    }
    else if (next === 3) {
      setVaildThird(true)
      setTab(4)
      setThirdKeys(true)

      console.log(data)
    }
  }





  const handlePackage = (v, i) => {
    packages?.forEach((el) => {
      if (v.id === el.id) {
        el.value = !el.value
      }
    })
    setPackages(packages)
    console.log(packages)

  }

  console.log(error)



  return (
    <div className="App">
      <div className=' container mx-auto sm:mx-[0px] h-full '>
        <div className=' grid h-full sm:block grid-cols-4 sm:grid-cols-1 py-4 sm:py-0'>
          <div className=' h-full  sm:h-auto'>
            <div className=' relative h-full sm:h-auto'>
              <div className=' mobile '>
                <div style={{zIndex:"10px"}} className=' absolute zvalue py-10 px-10 w-full grid grid-cols-4'>
                  <div>
                  <div onClick={() => handleTab(1)} className={`${tab === 1 ? "bg-pastel-blue text-marine-blue" : "text-white"} h-[36px] rounded-[50%]  border-white w-[36px] border  flex justify-center items-center`}>
                      1
                    </div>
                  </div>
                  <div>
                  <div onClick={() => handleTab(2)} className={`${tab === 2 ? "bg-pastel-blue text-marine-blue" : "text-white"} h-[36px] rounded-[50%]  border-white w-[36px] border  flex justify-center items-center`}>
                      2
                    </div>
                  </div>

                  <div>
                  <div onClick={() => handleTab(3)} className={`${tab === 3 ? "bg-pastel-blue text-marine-blue" : "text-white"} h-[36px] rounded-[50%]  border-white w-[36px] border  flex justify-center items-center`}>
                      3
                    </div>
                  </div>
                  <div>
                  <div onClick={() => handleTab(4)} className={`${tab === 4 ? "bg-pastel-blue text-marine-blue" : "text-white"} h-[36px] rounded-[50%]  border-white w-[36px] border  flex justify-center items-center`}>
                      4
                    </div>
                  </div>
                
                </div>

              </div>
              <div className=' absolute sm:relative desktop sm:top-0 top-[10%]'>

                <div className=' grid grid-cols-4 py-4 px-10 sm:grid-cols-1 sm:px-0 ' onClick={() => handleTab(1)}>
                  <div className=' px-2'>
                    <div className={`${tab === 1 ? "bg-pastel-blue text-marine-blue" : "text-white"} h-[36px] rounded-[50%]  border-white w-[36px] border  flex justify-center items-center`}>
                      1
                    </div>
                  </div>
                  <div className=' col-span-3 px-2'>
                    <div className=' text-left text-sm text-pastel-blue font-thin '>STEP 1</div>
                    <div className=' text-left leading-[16px] text-white font-semibold tracking-widest'>YOUR INFO</div>
                  </div>
                </div>
                <button disabled={firstkey ? false : false} className=' grid grid-cols-4 py-4 px-10  sm:grid-cols-1 sm:px-0 ' onClick={() => handleTab(2)}>
                  <div className=' px-2'>
                    <div className={`${tab === 2 ? "bg-pastel-blue text-marine-blue" : "text-white"} h-[36px] rounded-[50%]  border-white w-[36px] border  flex justify-center items-center`}>
                      2
                    </div>
                  </div>
                  <div className=' col-span-3 px-2'>
                    <div className=' text-left text-sm text-pastel-blue font-thin '>STEP 2</div>
                    <div className=' text-left leading-[16px] text-white font-semibold tracking-widest'>SELECT PLAN</div>
                  </div>
                </button>
                <div className=' grid grid-cols-4 py-4 px-10  sm:grid-cols-1 sm:px-0 ' onClick={() => handleTab(3)}>
                  <div className=' px-2'>
                    <div className={` ${tab === 3 ? "bg-pastel-blue text-marine-blue" : "text-white"} h-[36px] rounded-[50%]  border-white w-[36px] border  flex justify-center items-center`}>
                      3
                    </div>
                  </div>
                  <div className=' col-span-3 px-2 '>
                    <div className=' text-left text-sm text-pastel-blue font-thin '>STEP 3</div>
                    <div className=' text-left leading-[16px] text-white font-semibold tracking-widest'>ADD-ONS</div>
                  </div>
                </div>
                <div className=' grid grid-cols-4 py-4 px-10  sm:grid-cols-1 sm:px-0 ' onClick={() => handleTab(4)}>
                  <div className=' px-2'>
                    <div className={`${tab === 4 ? "bg-pastel-blue text-marine-blue" : "text-white"} h-[36px] rounded-[50%]  border-white w-[36px] border  flex justify-center items-center`}>
                      4
                    </div>
                  </div>
                  <div className=' col-span-3 px-2'>
                    <div className=' text-left text-sm text-pastel-blue font-thin '>STEP 4</div>
                    <div className=' text-left leading-[16px] text-white font-semibold tracking-widest'>SUMMARY</div>
                  </div>
                </div>


              </div>

              <img src={sidebarDesktop} alt="sidebarDesktop" className='sm:absolute desktop top-0  h-full ' />
              <img src={sidebarMobile} alt="sidebarMobile" className=' mobile'/>
            </div>
          </div>
          <div className=' col-span-3 sm:absolute top-[14%] sm:bg-white py-16 px-16 h-full sm:px-4 sm:py-10 sm:mx-6 sm:rounded-[10px] sm:col-span-1   '>
            <div className=' mx-16 sm:mx-0 h-full relative'>
              {/* <div className=' flex'>
                <div className=' h-[50px] w-[50px] mx-2 bg-marine-blue'>

                </div>
                <div className=' h-[50px] w-[50px] mx-2 bg-purplish-blue'>

                </div>
                <div className=' h-[50px] w-[50px] mx-2 bg-pastel-blue'>

                </div>
                <div className=' h-[50px] w-[50px] mx-2 bg-light-blue'>

                </div>
                <div className=' h-[50px] w-[50px] mx-2 bg-strawberry-red'>

                </div>
                <div className=' h-[50px] w-[50px] mx-2 bg-light-gray'>

                </div>
                <div className=' h-[50px] w-[50px] mx-2 bg-magnolia'>

                </div>
                <div className=' h-[50px] w-[50px] mx-2 bg-alabaster'>

                </div>

              </div> */}




              {tab === 1 ? <div className=' h-full sm:h-auto'>
                <h1 className='text-left text-[26px] font-semibold text-marine-blue'>Personal info</h1>
                <p className=' text-light-gray text-[18px] text-left pt-1'>Please provide your name, email address and phone number</p>
                <form className=' py-10'>
                  <div className=' pb-2'>
                    <div className=' grid grid-cols-2 py-2'>
                      <div className=' flex'>
                        <label className=' flex text-marine-blue  text-base'>Name </label>
                      </div>
                      <div className=' flex text-strawberry-red heading justify-end'>
                        {error.name}
                      </div>
                    </div>
                    <input type="text" value={data.name} placeholder='e.g. Stephen King' name="name" id="name" className={` ${error.name.length !== 0 ? ` ${error.name !== true ? "border-strawberry-red " : ""}   ` : "border-light-gray"}  placeholder:text-light-gray  text-marine-blue  border w-full rounded-[6px] py-3 px-4`} onChange={(e) => handleChnage(e)} />
                  </div>

                  <div className=' pb-2' >
                    <div className=' grid grid-cols-2 py-2'>
                      <div className=' flex'>
                        <label className=' flex text-marine-blue  text-base'>Email </label>
                      </div>
                      <div className=' flex text-strawberry-red heading justify-end'>
                        {error.email}
                      </div>
                    </div>
                    <input type="text" value={data.email} placeholder='e.g. stephenking@lorem.com' name="email" id="email" className={`
                    ${error.email.length !== 0 ? ` ${error.email !== true ? "border-strawberry-red " : ""}   ` : "border-light-gray"} placeholder:text-light-gray  text-marine-blue  border w-full rounded-[6px]  py-3 px-4`} onChange={(e) => handleChnage(e)} />
                  </div>

                  <div className=' pb-2' >
                    <div className=' grid grid-cols-2 py-2'>
                      <div className=' flex'>
                        <label className=' flex text-marine-blue  text-base'>Phone </label>
                      </div>
                      <div className=' flex text-strawberry-red heading justify-end'>
                        {error.phone}
                      </div>
                    </div>
                    <input type="number" value={data.phone} placeholder='e.g. +1 234 567 890' name="phone" id="phone" className={` ${error.phone !== null ? ` ${error.phone !== true ? "border-strawberry-red " : ""}   ` : "border-light-gray "} placeholder:text-light-gray  text-marine-blue  border w-full rounded-[6px] py-3 px-4`} onChange={(e) => handleChnage(e)} />
                  </div>

                  <div className='pt-10 flex absolute bottom-0 right-0 justify-end'>

                    <button className=' hover:bg-pastel-blue duration-300  bg-marine-blue text-white px-8 py-2 rounded-[6px]' onClick={(e) => handleNext(e, 1)}>Next</button>
                  </div>
                </form>

              </div> : null}
              {tab === 2 ? <div >

                <h1 className='text-left text-[26px] font-semibold text-marine-blue'>Select your plan</h1>
                <p className=' text-light-gray text-[18px] text-left pt-1'>you have the option of monthly or yearly billing</p>

                <form className=' py-12'>
                  <div className=' grid grid-cols-3 sm:grid-cols-1 gap-6'>
                    <div className={` ${data.plan === "arcade" ? " border border-purplish-blue" : "border border-light-gray "} cursor-pointer duration-300  py-4 px-3 sm:py-3 rounded-[6px] `}>
                      <label className=' sm:flex cursor-pointer'>
                        <img src={arcade} alt="arcade" />
                        <div className=' sm:px-4 '>
                          <input type='radio' name="plan" id="arcade" value="arcade" onChange={(e) => handleChnage(e)} />
                          <p className=' text-marine-blue font-semibold text-left'>Arcade</p>
                          <p className=' text-light-gray text-left'>$9/mon</p>
                          <p className={`    ${data.plan.length === 0 ? "hidden" : " visible "} text-marine-blue text-sm pt-1 text-left`}>2 months free</p>
                        </div>

                      </label>
                    </div>
                    <div className={` ${data.plan === "advanced" ? " border border-purplish-blue" : "border border-light-gray "} cursor-pointer duration-300  py-4 px-3 sm:py-3 rounded-[6px] `}>
                      <label className=' sm:flex  cursor-pointer'>
                        <img src={advanced} alt="advanced" />
                        <div className=' sm:px-4 '>
                          <input type='radio' name="plan" id="advanced" value="advanced" onChange={(e) => handleChnage(e)} />
                          <p className=' text-marine-blue font-semibold text-left'>Advanced</p>
                          <p className=' text-light-gray text-left'>$9/mon</p>
                          <p className={`    ${data.plan.length === 0 ? "hidden" : " visible "} text-marine-blue text-sm pt-1 text-left`}>2 months free</p>

                        </div>

                      </label>
                    </div>
                    <div className={` ${data.plan === "pro" ? " border border-purplish-blue" : "border border-light-gray "} cursor-pointer duration-300 py-4 px-3 sm:py-3  rounded-[6px] `}>
                      <label className='sm:flex  cursor-pointer'>
                        <img src={pro} alt="pro" />
                        <div className='  sm:px-4'>
                          <input type='radio' name="plan" id="pro" value="pro" onChange={(e) => handleChnage(e)} />
                          <p className=' text-marine-blue font-semibold text-left'>Pro</p>
                          <p className=' text-light-gray text-left'>$9/mon</p>

                          <p className={`    ${data.plan.length === 0 ? "hidden" : " visible "} text-marine-blue text-sm pt-1 text-left`}>2 months free</p>
                        </div>

                      </label>
                    </div>
                  </div>
                  <p className='text-strawberry-red heading justify-end'> {error.plan}</p>
                  <div>
                  </div>

                  <div className=' flex justify-center my-2 pt-6'>
                    <p className={`${add ? "text-light-gray  " : " text-marine-blue"}  font-semibold pt-0.5 mx-2 duration-300`}> Monthly </p>

                    <div className="toggle-switch" >
                      <input type="checkbox" onClick={() => setAdd(!add)} className="checkbox"
                        name={"toogle"} id={"label"} />
                      <label className="label" htmlFor={"label"}>
                        <span className={` ${data.months === null ? "" : ""} inner  `} />
                        <span className={` ${add === true ? `right-[0px]  ` : " right-[20px]"} switch`} />
                      </label>
                    </div>

                    <p className={`${add ? "text-marine-blue  " : "  text-light-gray"}   font-semibold pt-0.5 mx-2 duration-300`}> Yearly </p>
                  </div>



                  <div className='absolute bottom-0 w-full grid grid-cols-2 pt-12'>
                    <div className="flex ">
                      <div className=' text-light-gray'>
                        Go Back
                      </div>
                    </div>
                    <div className=' flex justify-end'>
                      <button className=' hover:bg-pastel-blue duration-300 bg-marine-blue text-white px-8 py-2 rounded-[6px]' onClick={(e) => handleNext(e, 2)}>Next</button>
                    </div>

                  </div>


                </form>
              </div> : null}

              {tab === 3 ? <div>




                <h1 className='text-left text-[26px] font-semibold text-marine-blue'>Pick add-ons</h1>
                <p className=' text-light-gray text-[18px] text-left pt-1'>Add-ons help enchance your gaming experience</p>

                <div className=' py-12'>

                  {packages?.map((v, i) => {
                    return (
                      <div className={`border border-light-gray rounded-[6px] py-4 cursor-pointer mb-4`}>
                        <label className={` cursor-pointer `}>
                          <div className=' grid grid-cols-6 '>
                            <div className=' my-4'>
                              <input type="checkbox" className='largerCheckbox' onClick={() => handlePackage(v, i)} id={v?.name} name={v?.name} defaultChecked={v?.value} value={v?.value} />
                            </div>
                            <div className=' col-span-4 sm:pt-1 sm:col-span-4 pt-1'>
                              <div className=' text-left  text-marine-blue sm:text-sm font-semibold'>
                                {v?.name}
                              </div>
                              <div className=' text-light-gray   text-left sm:text-[14px]'>
                                {v?.des}
                              </div>
                            </div>

                            <div className=' text-purplish-blue my-4 sm:pt-1 sm:text-[14px] '>
                              {add ? `${v?.price_year}` : `${v?.price_month}`}

                              {/* {v?.price_month} */}
                            </div>
                          </div>
                          <div>
                          </div>
                        </label>
                      </div>
                    )
                  })}
                </div>


                <p className='text-strawberry-red heading justify-end'>  {error.package}</p>


                <div className='absolute bottom-0 w-full  grid grid-cols-2'>
                  <div className="flex ">
                    <div className=' text-light-gray'>
                      Go Back
                    </div>
                  </div>
                  <div className=' flex justify-end'>
                    <button className=' hover:bg-pastel-blue duration-300 bg-marine-blue text-white px-8 py-2 rounded-[6px]' onClick={(e) => handleNext(e, 3)}>Next</button>
                  </div>
                </div>
              </div> : null}

              {tab === 4 ? <div>
                <h1 className='text-left text-[26px] font-semibold text-marine-blue'>Finishing up</h1>
                <p className=' text-light-gray text-[18px] text-left pt-1'>Double-check everything looks OK before confirming</p>

                <div className=' grid grid-cols-2 py-12 pb-8 border-bottom-grey'>
                  <div>
                    {data.plan === "pro" ? <div className='text-left text-marine-blue font-semibold'>   Pro  {data.months ? <span className='text-left text-marine-blue font-semibold'>(Yearly) </span> : <span className='text-left text-marine-blue font-semibold'> (Monthly)</span>} </div> : null}
                    {data.plan === "advanced" ? <div className='text-left text-marine-blue font-semibold'>   Advanced   {data.months ? <span className='text-left text-marine-blue font-semibold'>(Yearly) </span> : <span className='text-left text-marine-blue font-semibold'> (Monthly)</span>}</div> : null}
                    {data.plan === "arcade" ? <div className='text-left text-marine-blue font-semibold'>   Arcade   {data.months ? <span className='text-left text-marine-blue font-semibold'>(Yearly) </span> : <span className='text-left text-marine-blue font-semibold'> (Monthly)</span>}</div> : null}

                  </div>
                  <div>
                    <div className='text-right text-marine-blue font-semibold'>$9<sapn>{data.months ? <span>/ye</span> : <span> /mo</span>}</sapn></div>
                  </div>
                </div>



                <div className=' grid grid-cols-2 py-4'>
                  {packages?.map((v, i) => {
                    return (
                      <>
                        <div className=' py-2'>
                          {v?.value === true ? <div className='text-left text-light-gray '>{v?.name} </div> : null}
                        </div>
                        <div className=' py-2'>
                          {v?.value === true ? <> {data.months ? <><div className='text-right text-marine-blue font-semibold'>{v?.price_year} </div></> : <><div className='text-right text-marine-blue font-semibold'>{v?.price_month} </div></>}</> : null}
                        </div>
                      </>
                    )
                  })}
                  <div>





                  </div>

                </div>

                <div className=' grid grid-cols-2 pt-4'>
                  <div className='flex text-light-gray'>
                    Total  {add ? <p className=' text-light-gray mx-1'> Per Year</p> : <p className=' text-light-gray mx-1'>Per Months</p>}
                  </div>
                  <div className='text-right text-purplish-blue text-[24px] font-semibold'>$9<sapn>{data.months ? <span>/ye</span> : <span> /mo</span>}</sapn></div>
                </div>





                <div className='absolute bottom-0 w-full  grid grid-cols-2 pt-10'>
                  <div className="flex ">
                    <div className=' text-light-gray'>
                      Go Back
                    </div>
                  </div>
                  <div className=' flex justify-end'>
                    <button className=' hover:bg-pastel-blue duration-300 bg-marine-blue text-white px-8 py-2 rounded-[6px]' onClick={(e) => handleNext(e, 3)}>Confirm</button>
                  </div>
                </div>

              </div> : null}



            </div>
          </div>

        </div>

      </div>


    </div>
  );
}

export default App;
