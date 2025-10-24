import type { Schema, Struct } from '@strapi/strapi';

export interface ArticleComponentArticle extends Struct.ComponentSchema {
  collectionName: 'components_article_component_articles';
  info: {
    displayName: 'article';
    icon: 'layer';
  };
  attributes: {
    article_description: Schema.Attribute.Blocks;
    article_name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0642\u0627\u0644'>;
  };
}

export interface LatesNewsLatesNews extends Struct.ComponentSchema {
  collectionName: 'components_lates_news_lates_news';
  info: {
    displayName: 'lates-news';
    icon: 'pencil';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SpecializtionSpecializtion extends Struct.ComponentSchema {
  collectionName: 'components_specializtion_specializtions';
  info: {
    displayName: 'specializtion';
    icon: 'car';
  };
  attributes: {
    specializtion: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article-component.article': ArticleComponentArticle;
      'lates-news.lates-news': LatesNewsLatesNews;
      'specializtion.specializtion': SpecializtionSpecializtion;
    }
  }
}
