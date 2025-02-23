declare type MenuItem = {
   label?: string
   icon?: string
   to?: string
   disabled?: boolean
   items?: MenuItem[]
   header?: string
   separator?: boolean
}