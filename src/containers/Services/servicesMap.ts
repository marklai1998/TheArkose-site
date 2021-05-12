import minecraft from '../../assets/minecraft.png'
import pixark from '../../assets/pixark.png'
import ark from '../../assets/ark.png'
import conanExiles from '../../assets/conanExiles.png'

export enum servicesType {
  ALL = 'ALL',
  MC = 'MC',
  STEAM = 'STEAM',
}

export const allServices = [
  { type: servicesType.MC, icon: minecraft, name: '火柴人小品休閒伺服器' },
  { type: servicesType.MC, icon: minecraft, name: 'HK Survival Server' },
  { type: servicesType.MC, icon: minecraft, name: 'Project Thearkose 1.12' },
  { type: servicesType.MC, icon: minecraft, name: 'Project Thearkose 1.13' },
  { type: servicesType.MC, icon: minecraft, name: 'Project Thearkose 1.14' },
  { type: servicesType.STEAM, icon: pixark, name: 'PixARK' },
  { type: servicesType.STEAM, icon: ark, name: 'ARK' },
  { type: servicesType.STEAM, icon: conanExiles, name: 'Conan Exiles' },
]
