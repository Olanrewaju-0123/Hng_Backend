const getProfile = (req, res) => {
    try {

        const profile = {
            email: "ridwany@gmail.com",
            current_datetime: new Date().toISOString(),
            github_url: "https://github.com/Olanrewaju-0123?tab=repositories"
        }
        res.status(200).json(profile)
    } catch (err) {
        res.status(500).json({
            message: err.message

        })

    }
};

module.exports = { getProfile };
