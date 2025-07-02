import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useModalStore } from "@/stores/useStore";
import { DialogTitle } from "@radix-ui/react-dialog";

const Modal = () => {
  const { isOpen, closeModal } = useModalStore();

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent>
        <DialogTitle>123</DialogTitle>
        <div className="p-4">이건 모달입니다</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
