import uuidv4 from 'uuid/v4'
import Aida from '../../assets/clients/aida.png'
import AirBerlin from '../../assets/clients/airberlin.png'
import Akad from '../../assets/clients/akad.png'
import FoodPanda from '../../assets/clients/foodpanda.png'
import Gamigo from '../../assets/clients/gamigo.png'
import Gj from '../../assets/clients/gj.png'
import Jimdo from '../../assets/clients/jimdo.png'
import Mobil from '../../assets/clients/mobil.png'
import Otto from '../../assets/clients/otto.png'
import TOnline from '../../assets/clients/t-online.png'
import Travel from '../../assets/clients/travel.png'
import Zalando from '../../assets/clients/zalando.png'

const clients = [
    {
        id: uuidv4(),
        src: Aida,
        name: 'Aida',
    },
    {
        id: uuidv4(),
        src: AirBerlin,
        name: 'Air-Berlin',
    },
    {
        id: uuidv4(),
        src: Akad,
        name: 'Akad',
    },
    {
        id: uuidv4(),
        src: FoodPanda,
        name: 'Food-Panda',
    },
    {
        id: uuidv4(),
        src: Gamigo,
        name: 'Gamigo',
    },
    {
        id: uuidv4(),
        src: Gj,
        name: 'GJ',
    },
    {
        id: uuidv4(),
        src: Jimdo,
        name: 'Jimdo',
    },
    {
        id: uuidv4(),
        src: Mobil,
        name: 'Mobil',
    },
    {
        id: uuidv4(),
        src: Otto,
        name: 'Otto',
    },
    {
        id: uuidv4(),
        src: TOnline,
        name: 'T-Online',
    },
    {
        id: uuidv4(),
        src: Travel,
        name: 'Travel',
    },
    {
        id: uuidv4(),
        src: Zalando,
        name: 'Zalando',
    },
]

const getClients = () => {
    return clients
}

export { getClients as default }
