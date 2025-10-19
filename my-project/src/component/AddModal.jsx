// component/AddModal.jsx
import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import CustomModal from "./CustomModal";

function AddModal({ open, setOpen, addUser, name, setName, image, setImage}) {
    return (
        <CustomModal open={open} setOpen={setOpen}>
            <form onSubmit={addUser}>
                <DialogTitle>Add User</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        margin="dense"
                        label="Image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        label="About"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button type="submit" variant="contained">
                        Save
                    </Button>
                </DialogActions>
            </form>
        </CustomModal>
    );
}

export default AddModal;
