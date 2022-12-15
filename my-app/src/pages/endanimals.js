import SearchBar from "./SearchBar";
import EndangeredData from "./Conversion.json"
import "./SearchBar.css";
export default function endanimals()
{
    return (
        <SearchBar placeholder = "      Look up a Animals that are about to be Endangered" data ={EndangeredData}/>
    );
 }