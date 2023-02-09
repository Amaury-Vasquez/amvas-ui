import { FC } from 'react';
import { Upload } from '@/components';

const UploadOverview: FC = () => (
  <div className="w-full h-full flex justify-center items-center">
    <Upload handleUpload={(file: File) => console.log(file)} />
  </div>
);

export default UploadOverview;
