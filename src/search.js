

function  Search ({setsearch , intSearch}){
  return (
    <form action="" >
        <label htmlFor="">Search</label>
        <input type="text"
        autoFocus 
        id="Search"
        placeholder="AddIteams"
        value={intSearch}
        onChange={(e)=>setsearch(e.target.value) }
        />
    </form>
  )
}

export default Search;