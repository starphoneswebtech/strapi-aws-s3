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
      'store-hours.store-hours': StoreHoursStoreHours;
      'viewport.viewport': ViewportViewport;
    }
  }
}
