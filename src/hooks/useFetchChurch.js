import { useEffect, useState } from "react";
import {getChurchs} from "./../helpers/getChurchs";



export const useFetchChurch = (mision) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	useEffect( () =>{
		getChurchs( mision )
			.then(imgs =>{
				setState({
					data: imgs,
					loading: false
				});
			})
	}, [mision])

	return state;
}