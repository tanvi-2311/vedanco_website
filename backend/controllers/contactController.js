const supabase = require('../config/supabase');

// @desc    Submit a contact form
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          phone,
          subject,
          message,
        },
      ])
      .select()
      .single();

    if (error) {
      res.status(400);
      throw new Error(error.message);
    }

    res.status(211).json({
      message: 'Contact form submitted successfully',
      id: data.id,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitContactForm };
