class CreateUrls < ActiveRecord::Migration[7.0]
  def change
    create_table :urls do |t|
      t.string :shortURL
      t.string :longURL
      t.timestamps
    end
  end
end
