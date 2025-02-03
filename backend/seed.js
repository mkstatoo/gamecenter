const { User } = require('./models');
const bcrypt = require('bcrypt');
const sequelize = require('./utils/db');

const createAdminUser = async () => {
  const adminUsername = 'admin';
  const adminPassword = 'admin123'; // رمز عبور پیش‌فرض
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  try {
    // همگام‌سازی مدل‌ها با دیتابیس
    await sequelize.sync();

    // بررسی وجود کاربر ادمین
    const existingAdmin = await User.findOne({ where: { username: adminUsername } });
    if (!existingAdmin) {
      // ایجاد کاربر ادمین
      await User.create({
        username: adminUsername,
        password: hashedPassword,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      console.log('Admin user created successfully!');
    } else {
      console.log('Admin user already exists.');
    }
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
};

createAdminUser();