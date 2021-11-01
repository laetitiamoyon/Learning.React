import { ChangeEvent } from 'react';

export const imageUploading = (event : ChangeEvent<HTMLInputElement>, 
  onImageUploaded : (image: string) => void)  => 
{
  if (!event.target.files || !event.target.files[0]) return

  var file = event.target.files[0]
  var reader = new FileReader()

  reader.onload = (event : ProgressEvent<FileReader>) => onImageUploaded(event?.target?.result as string)
  reader.readAsDataURL(file)

};
