module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('rating', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    roomId: {
      allowNull: false,
      // field: 'room_id',
      type: DataTypes.INTEGER,
    },
    ratingCheckIn: {
      allowNull: false,
      // field: 'rating_check_in',
      type: DataTypes.INTEGER,
    },
    ratingAccuracy: {
      allowNull: false,
      // field: 'rating_accuracy',
      type: DataTypes.INTEGER,
    },
    ratingLocation: {
      allowNull: false,
      // field: 'rating_location',
      type: DataTypes.INTEGER,
    },
    ratingCommunication: {
      allowNull: false,
      // field: 'rating_communication',
      type: DataTypes.INTEGER,
    },
    ratingCleanliness: {
      allowNull: false,
      // field: 'rating_cleanliness',
      type: DataTypes.INTEGER,
    },
    ratingValue: {
      allowNull: false,
      // field: 'rating_value',
      type: DataTypes.INTEGER,
    },
  });

  return Rating;
};
