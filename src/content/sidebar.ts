import {HomeIcon, BanknotesIcon, ShoppingCartIcon} from '@heroicons/react/24/solid'
import {HomeIcon as HomeIconOutlined,
     BanknotesIcon as BanknotesIconOutlined,
     ShoppingCartIcon as ShoppingCartIconOutlined
    } from '@heroicons/react/24/outline'

export const sidebarContent = [
    {
        text: 'Dashboard',
        route: ``,
        icon: HomeIcon,
        iconOutlined: HomeIconOutlined
    },
    {
        text: 'Monetization',
        route: `/monetization`,
        icon: BanknotesIcon,
        iconOutlined: BanknotesIconOutlined
    },
    {
        text: 'Premium',
        route: `/premium`,
        icon: ShoppingCartIcon,
        iconOutlined: ShoppingCartIconOutlined
    },
]