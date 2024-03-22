import {FreshContext, Handlers, PageProps} from "$fresh/server.ts";
import { AgendaResponse } from "../types.ts";



export default function Page(props: PageProps<AgendaResponse>){
    
    return (
        <div>
            <br></br>
            <p class="center">Welcome to my agenda!</p>
        </div>
    )
}
