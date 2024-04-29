export function Hero(){

    return(

        <div>


            <div className="flex flex-row justify-center lg:justify-start py-32  px-4 pl-48 space-x-64 shadow-sm">
                <img src="../img/zenithLogo.png" alt="Zenith" className=" pt-32 h-96 "/>

                <span className="pt-28 break-normal antialiased hover:subpixel-antialiased font-mono  text-6xl font-semibold italic text-blue-600/75 dark:text-blue-500/75 ">Welcome to Zenith, your pinnacle of online convenience for effortless transactions and seamless experiences.</span>

            </div>


            <div className="flex flex-row justify-center lg:justify-start py-32  px-4 space-x-64 shadow-sm">

                <div className="text-center justify-center  block pt-36 pl-8  ">
                <span className=" antialiased hover:subpixel-antialiased font-mono  text-xl font-semibold italic text-blue-600/75 dark:text-blue-500/75 shadow-md shadow-sky-600" >Time is more valuable than money. 
                <br></br>You can get more money, but you cannot get more time</span>
                </div>
                
                <img src="../img/transfer.png" alt="money" className=" flex  justify-end w-2/5 border border-solid rounded-md shadow-2xl shadow-sky-600" />
                
           

        </div>
                
            </div>
          
    )

}