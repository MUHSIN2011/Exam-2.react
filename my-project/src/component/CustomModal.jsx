// component/CustomModal.jsx
import { Dialog } from "@mui/material";

function CustomModal({ open, setOpen, children }) {
    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            {children}
        </Dialog>
    );
}

export default CustomModal;
