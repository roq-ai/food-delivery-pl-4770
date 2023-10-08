interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Manager'],
  customerRoles: ['Customer'],
  tenantRoles: [
    'Restaurant Owner',
    'Restaurant Manager',
    'Delivery Driver',
    'Customer Service Representative',
    'Customer',
  ],
  tenantName: 'Restaurant',
  applicationName: 'food delivery platform',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read restaurant information',
    'Read menu items',
    'Place an order',
    'Update personal information',
  ],
  ownerAbilities: [
    'Manage restaurant information',
    'Create menus for the restaurant',
    'Manage bookings',
    'Manage user information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/e71dd65d-3bb0-46cb-8ac1-0ce72be2aa8d',
};
