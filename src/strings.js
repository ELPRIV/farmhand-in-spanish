import { cowColors } from './enums.js'

export const PROGRESS_SAVED_MESSAGE = '¡Progreso guardado!'
export const RAIN_MESSAGE = '¡Llovió por la noche!'
export const STORM_MESSAGE = '¡Hubo una tormenta en la noche!'
export const STORM_DESTROYS_SCARECROWS_MESSAGE =
  '¡Hubo una tormenta en la noche! ¡Ningún espantapájaros sobrevivió!'
export const FARM_PRODUCTS_TOOLTIP_TEXT =
  'Esta cifra solo incluye las ventas de cultivos, artículos artesanales y productos animales.'
export const COW_SOLD_TOOLTIP_TEXT =
  'Esta cifra solo incluye vacas de las que no era propietario original.'
export const DATA_DELETED = 'Los datos de tu juego local han sido eliminados.'
export const INVALID_DATA_PROVIDED = 'Se proporcionaron datos de Farmhand no válidos.'
export const UPDATE_AVAILABLE =
  "A game update is available! Click this message to reload and see what's new."
export const SERVER_ERROR =
  'There was an issue connecting to the server. Please try again in a moment.'
export const CONNECTING_TO_SERVER = 'Connecting...'
export const DISCONNECTING_FROM_SERVER = 'Disconnecting...'
export const DISCONNECTED_FROM_SERVER = 'You are now playing offline.'
export const REQUESTED_COW_TRADE_UNAVAILABLE =
  'The requested cow is no longer available.'
export const UNKNOWN_COW_TRADE_FAILURE =
  'Something went wrong with your cow trade request. Please try again!'
export const COW_ALREADY_OWNED = 'It looks like you already have this cow!'
export const OUT_OF_COW_FEED_NOTIFICATION =
  "You're out of cow feed! Buy some more before your cows get hungry and run away!"
export const INVENTORY_FULL_NOTIFICATION = 'Your inventory is full!'

export const SHOVELED = 'Shoveled plot'

export const WATERING_CAN_ALT_TEXT = 'A watering can for hydrating plants.'
export const WATERING_CAN_HIDDEN_TEXT =
  'Select the watering can to water your crops'
export const SCYTHE_ALT_TEXT = 'A scythe for crop harvesting.'
export const SCYTHE_HIDDEN_TEXT = 'Select the scythe to harvest ripened crops'
export const HOE_ALT_TEXT =
  'A hoe for removing crops and disposing of them. Also returns replantable items to your inventory.'
export const HOE_HIDDEN_TEXT =
  'Select the hoe to clear crops, or replantable field items'
export const SHOVEL_ALT_TEXT = 'A shovel for digging up rocks.'
export const SHOVEL_HIDDEN_TEXT = 'Select the shovel to dig for ore'

// TODO: Implement all of these upgrades
export const TOOL_LEVEL_INFO = {
  SCYTHE: {
    DEFAULT: '**Basic**: Harvests one crop per plot.',
    BRONZE: '**Bronze**: Harvests two crops per plot.',
    IRON: '**Iron**: Harvests three crops per plot.',
    SILVER: '**Silver**: Harvests four crops per plot.',
    GOLD: '**Gold**: Harvests five crops per plot.',
  },
  SHOVEL: {
    DEFAULT: '**Basic**: Has a 30% chance of digging up resources.',
    BRONZE: '**Bronze**: Has a 40% chance of digging up resources.',
    IRON: '**Iron**: Has a 50% chance of digging up resources.',
    SILVER: '**Silver**: Has a 60% chance of digging up resources.',
    GOLD: '**Gold**: Has a 70% chance of digging up resources.',
  },
  WATERING_CAN: {
    DEFAULT: '**Basic**: Keeps plots watered for one day.',
    BRONZE: '**Bronze**: Keeps plots watered for two days.',
    IRON: '**Iron**: Keeps plots watered for three days.',
    SILVER: '**Silver**: Keeps plots watered for four days.',
    GOLD: '**Gold**: Keeps plots watered for five days.',
  },
  HOE: {
    DEFAULT: '**Basic**: Destroys crops.',
    BRONZE: '**Bronze**: 25% chance to retrieve seeds when digging up crops.',
    IRON: '**Iron**: 50% chance to retrieve seeds when digging up crops.',
    SILVER: '**Silver**: 75% chance to retrieve seeds when digging up crops.',
    GOLD: '**Gold**: 100% chance to retrieve seeds when digging up crops.',
  },
}

export const FORGE_AVAILABLE_NOTIFICATION =
  '**The Forge** is now available in the Workshop!'

export const RECYCLING_AVAILABLE_NOTIFICATION =
  '**Recycling** is now available in the Workshop!'

export const FOREST_AVAILABLE_NOTIFICATION = 'The **Forest** is now available!'

export const COW_COLOR_NAMES = {
  [cowColors.BLUE]: 'Blue',
  [cowColors.BROWN]: 'Brown',
  [cowColors.GREEN]: 'Green',
  [cowColors.ORANGE]: 'Orange',
  [cowColors.PURPLE]: 'Purple',
  [cowColors.RAINBOW]: 'Rainbow',
  [cowColors.WHITE]: 'White',
  [cowColors.YELLOW]: 'Yellow',
}

export const SHOVEL_UNLOCKED =
  "You've unlocked a new tool for the field, The **Shovel**!"
