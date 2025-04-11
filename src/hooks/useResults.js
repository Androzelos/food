import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export function API_Search() {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage]  = useState('');

    const searchApi = async (searchTerm) => {
        try{
            setErrorMessage('')
            console.log('searching')

            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage('Something went wrong')
        }
    }

    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage]
}


//?????????????????????????????????????????????
export function API_Search_By_ID(id) {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage]  = useState('');

    const IDApi = async () => {
        try{
            setErrorMessage('')
            console.log('searching_bussines_by_id')
            
            const response = await yelp.get('/matches', {
                params: {
                    yelp_bussiness_id: id
                }
            },
            console.log('im doing this')
            )
            console.log('im doing this now')
            setResult(response)
            
            console.log(id);
            console.log(result);

        } catch (err) {
            setErrorMessage('Something went wrong')
        }
    }

    useEffect(() => {
        IDApi()
    }, [result])

    return [IDApi, result, errorMessage]
}