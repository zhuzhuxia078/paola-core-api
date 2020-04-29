module.exports = (sequelize, DataTypes) => {
  const ChatBotLog = sequelize.define('chatBotLog', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    eventType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'event_type',
    },
    sentTo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'sent_to',
    },
    sentFrom: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'sent_from',
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'message',
    },
  }, {
    tableName: 'chat_bot_logs',
  });

  return ChatBotLog;
};
