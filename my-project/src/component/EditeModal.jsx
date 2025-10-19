import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import CustomModal from "./CustomModal";

function EditModal({ openEdit, setOpenEdit, saveEdit, name, setName, image, setImage }) {
    return (
        <CustomModal open={openEdit} setOpen={setOpenEdit}>
            <form onSubmit={(e) => { e.preventDefault(); saveEdit(); }}>
                <DialogTitle>Edit User</DialogTitle>
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
                        label="ABOUTE"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
                    <Button type="submit" variant="contained">
                        Update
                    </Button>
                </DialogActions>
            </form>
        </CustomModal>
    );
}

export default EditModal;
