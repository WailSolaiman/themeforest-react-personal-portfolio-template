import uuidv4 from 'uuid/v4'
import Logo1 from '../../../assets/clients/logo1.png'
import Logo2 from '../../../assets/clients/logo2.png'

const clients = [
    {
        id: uuidv4(),
        logo: {
            src: Logo1,
            name: 'Logo1',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Logo2,
            name: 'Logo2',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Logo1,
            name: 'Logo1',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Logo2,
            name: 'Logo2',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Logo2,
            name: 'Logo2',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Logo1,
            name: 'Logo1',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Logo2,
            name: 'Logo2',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Logo1,
            name: 'Logo1',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Logo1,
            name: 'Logo1',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Logo2,
            name: 'Logo2',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Logo1,
            name: 'Logo1',
        },
    },
    {
        id: uuidv4(),
        logo: {
            src: Logo2,
            name: 'Logo2',
        },
    },
]
const clientsHeader = 'Customers for whom we are lucky enough to work'
const clientsDescription = `Bring to the table win-win survival strategies to ensure proactive domination. 
    At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading 
    towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
    towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.`

const getClients = () => clients
const getClientsHeader = () => clientsHeader
const getClientsDescription = () => clientsDescription

export { getClients, getClientsHeader, getClientsDescription }
