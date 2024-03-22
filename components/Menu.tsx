import {FunctionComponent} from "preact";


const Menu: FunctionComponent = () => {
    return (
        <div class="center">
            <div class="menu">
                <a class="link" href ="/AgendaClient"> Agenda Client Side </a>
                <a class="link" href ="/AgendaServer"> Agenda Server Side </a>
               
            </div>
            <h1 class="titulo"> My Agenda </h1>
        </div>
    )
}

export default Menu;