import type { Schema, Struct } from '@strapi/strapi';

export interface MenuMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_menus';
  info: {
    description: '';
    displayName: 'menu';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    descriptionmenu: Schema.Attribute.Blocks;
    imagemenusecond: Schema.Attribute.Media<'images'>;
    menuImages: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
    textmenu: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'menu.menu': MenuMenu;
    }
  }
}
