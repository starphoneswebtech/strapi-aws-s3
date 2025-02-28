import type { Schema, Struct } from '@strapi/strapi';

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
      'geometry.geometry': GeometryGeometry;
      'location.location': LocationLocation;
      'metadata.metadata': MetadataMetadata;
      'store-details.about-us': StoreDetailsAboutUs;
      'store-details.map-banner-info': StoreDetailsMapBannerInfo;
      'store-hours.store-hours': StoreHoursStoreHours;
      'viewport.viewport': ViewportViewport;
    }
  }
}
