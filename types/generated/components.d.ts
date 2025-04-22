import type { Schema, Struct } from '@strapi/strapi';

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    answer: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'>;
    question: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Example Question?'>;
  };
}

export interface GeometryGeometry extends Struct.ComponentSchema {
  collectionName: 'components_geometry_geometries';
  info: {
    displayName: 'geometry';
    icon: 'pinMap';
  };
  attributes: {
    location: Schema.Attribute.Component<'location.location', false>;
    viewport: Schema.Attribute.Component<'viewport.viewport', false>;
  };
}

export interface LocationLocation extends Struct.ComponentSchema {
  collectionName: 'components_location_locations';
  info: {
    description: '';
    displayName: 'location';
    icon: 'pinMap';
  };
  attributes: {
    lat: Schema.Attribute.String;
    lng: Schema.Attribute.String;
  };
}

export interface MarqueeMarquee extends Struct.ComponentSchema {
  collectionName: 'components_marquee_marquees';
  info: {
    displayName: 'Marquee';
    icon: 'play';
  };
  attributes: {
    identifier: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    images: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

export interface MetadataMetadata extends Struct.ComponentSchema {
  collectionName: 'components_metadata_metadata';
  info: {
    description: '';
    displayName: 'metadata';
    icon: 'search';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductCollectionProductCollections
  extends Struct.ComponentSchema {
  collectionName: 'components_product_collection_product_collections';
  info: {
    description: '';
    displayName: 'Product Collections';
    icon: 'gift';
  };
  attributes: {
    collectionDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    collectionLink: Schema.Attribute.String & Schema.Attribute.Required;
    collectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    featureImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ProductsProductFilters extends Struct.ComponentSchema {
  collectionName: 'components_products_product_filters';
  info: {
    displayName: 'Product Filters';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface ServiceServiceFeatures extends Struct.ComponentSchema {
  collectionName: 'components_service_service_features';
  info: {
    description: '';
    displayName: 'ServiceFeatures';
    icon: 'doctor';
  };
  attributes: {
    button: Schema.Attribute.String;
    featureImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    markdown: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface StoreDetailsAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_store_details_aboutuses';
  info: {
    displayName: 'AboutUs';
    icon: 'chartBubble';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Unable to access your phone to charge it? Accidentally dropped your phone and cracked the screen? Don\u2019t worry, we can fix it for you right away!  Star Phones mobile repair in Parramatta can have your phone fixed and looking brand new in no time! No matter how big or small the job, you can rely on us to ensure your phone is working like new again.'>;
    featureImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    subTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Choose our reliable, affordable, and efficient phone repair services. Our experienced, trustworthy technicians provide quick, professional repairs, ensuring your device is fixed with care and precision.'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Mobile Phone Repairs'>;
  };
}

export interface StoreDetailsMapBannerInfo extends Struct.ComponentSchema {
  collectionName: 'components_store_details_map_banner_infos';
  info: {
    displayName: 'MapBannerInfo';
    icon: 'book';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"We got you! Whether your phone isn't charging or you've cracked the screen, we've got you covered. Our expert team will promptly fix your phone, restoring it to like-new condition. Whatever the problem, you can rely on us to bring your phone back to its best!">;
    intro: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Looking for a phone repair near Parramatta?'>;
    subTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Your trusted phone accessories shop in Parramatta'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Phone Repair'>;
  };
}

export interface StoreHoursStoreHours extends Struct.ComponentSchema {
  collectionName: 'components_store_hours_store_hours';
  info: {
    displayName: 'storeHours';
  };
  attributes: {
    friday: Schema.Attribute.String;
    monday: Schema.Attribute.String;
    saturday: Schema.Attribute.String;
    sunday: Schema.Attribute.String;
    thursday: Schema.Attribute.String;
    tuesday: Schema.Attribute.String;
    wednesday: Schema.Attribute.String;
  };
}

export interface ViewportViewport extends Struct.ComponentSchema {
  collectionName: 'components_viewport_viewports';
  info: {
    description: '';
    displayName: 'viewport';
  };
  attributes: {
    east: Schema.Attribute.String;
    north: Schema.Attribute.String;
    south: Schema.Attribute.String;
    west: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'faq.faq': FaqFaq;
      'geometry.geometry': GeometryGeometry;
      'location.location': LocationLocation;
      'marquee.marquee': MarqueeMarquee;
      'metadata.metadata': MetadataMetadata;
      'product-collection.product-collections': ProductCollectionProductCollections;
      'products.product-filters': ProductsProductFilters;
      'service.service-features': ServiceServiceFeatures;
      'store-details.about-us': StoreDetailsAboutUs;
      'store-details.map-banner-info': StoreDetailsMapBannerInfo;
      'store-hours.store-hours': StoreHoursStoreHours;
      'viewport.viewport': ViewportViewport;
    }
  }
}
