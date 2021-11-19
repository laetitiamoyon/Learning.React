import { ChangeEvent } from 'react';

export const imageUploading = (
  event : ChangeEvent<HTMLInputElement>,
  onImageUploaded : (image: string) => void
) =>
{
  if (!event.target.files || !event.target.files[0]) return

  let file = event.target.files[0]
  let reader = new FileReader()

  reader.onload = (event : ProgressEvent<FileReader>) => onImageUploaded(event?.target?.result as string)
  reader.readAsDataURL(file)
};
