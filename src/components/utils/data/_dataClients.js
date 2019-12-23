import uuidv4 from 'uuid/v4'
import Aida from '../../../assets/clients/aida.png'
import AirBerlin from '../../../assets/clients/airberlin.png'
import Akad from '../../../assets/clients/akad.png'
import FoodPanda from '../../../assets/clients/foodpanda.png'
import Gamigo from '../../../assets/clients/gamigo.png'
import Gj from '../../../assets/clients/gj.png'
import Jimdo from '../../../assets/clients/jimdo.png'
import Mobil from '../../../assets/clients/mobil.png'
import Otto from '../../../assets/clients/otto.png'
import TOnline from '../../../assets/clients/t-online.png'
import Travel from '../../../assets/clients/travel.png'
import Ltur from '../../../assets/clients/ltur.png'

const clients = [
    {
        id: uuidv4(),
        logo: {
            src: Aida,
            name: 'Aida',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: AirBerlin,
            name: 'Air-Berlin',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Akad,
            name: 'Akad',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: FoodPanda,
            name: 'Food-Panda',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Gamigo,
            name: 'Gamigo',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Gj,
            name: 'GJ',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Jimdo,
            name: 'Jimdo',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Mobil,
            name: 'Mobil',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Otto,
            name: 'Otto',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: TOnline,
            name: 'T-Online',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Travel,
            name: 'Travel',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Ltur,
            name: 'Ltur',
        },
    },
]
const clientsHeader = 'Customers for whom we are lucky enough to work'
const clientsDescription = `Bring to the table win-win survival strategies to ensure proactive domination. 
    At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading 
    towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.`

const getClients = () => clients
const getClientsHeader = () => clientsHeader
const getClientsDescription = () => clientsDescription

export { getClients, getClientsHeader, getClientsDescription }
