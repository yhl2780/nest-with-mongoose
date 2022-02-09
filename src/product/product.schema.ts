import * as mongoose from 'mongoose';
/*import * as autoIncrement from 'mongoose-auto-increment';*/

export const ProductSchema = new mongoose.Schema({
  category: String,
  productName: String,
  productPrice: Number,
}, {collection: 'Product'});

/*autoIncrement.initialize(mongoose.connection);
ProductSchema.plugin(autoIncrement.plugin, 'Product');
mongoose.model('Product', ProductSchema);*/

/*
id       String    @id @default(dbgenerated()) @map("_id") @db.ObjectId
category     String
productName    String
productPrice     Int*/
