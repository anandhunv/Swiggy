
export const withVegLabel=(RestaurentCard)=>{
    return(props)=>{
      return(
        <div className="bg-lime-100 rounded-3xl m-[2px] ">
          <label className="absolute">Veg</label>
                  <RestaurentCard {...props} />
              </div>
      )
    }
   }