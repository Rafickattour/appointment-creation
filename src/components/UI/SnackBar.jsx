import { Snackbar } from "@mui/material";

export default function SnackBar(props) {
    const { open, autoHideDuration, onClose, message } = props;

    return (
        <Snackbar
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
            message={message}
        />
    );
};