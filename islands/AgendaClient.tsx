import {FunctionComponent} from "preact";

const MenuAgendaClient: FunctionComponent = () => {
    return (
        <div class="center">
            <form class="formulario"action="AgendaClient" methos="post">
                <p>Add new contact</p>
                <input type="text" name="name" placeholder="Name"/>
                <input type="email" name="email" placeholder="Email"/>
                <button class="boton" type="submit">Add Contact</button>
            </form>
        </div>
    )
}

export default MenuAgendaClient;