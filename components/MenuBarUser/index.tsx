import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type MenuBarUserProps = {
  isSignUpButtonDisplayed: boolean;
};
export const MenuBarUser: FC<MenuBarUserProps> = ({
  isSignUpButtonDisplayed,
}) => {
  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='ml-8 flex-1'>
          <Link href='/'>
            <Image src='tabbit_logo.svg' alt='Logo' width={129} height={53} />
          </Link>
        </div>
        {isSignUpButtonDisplayed && (
          <div className='mr-8 flex-none'>
            <button className='btn-primary btn text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                viewBox='0 0 187.135 200'
              >
                <path
                  d='M747.259-826.013c-16.734,0-33.452,1.209-47.4,3.682s-25.1,5.72-31.457,12.081c-4.644,4.644-7.464,11.83-9.79,20.806a191.715,191.715,0,0,0-4.9,31.393,4.473,4.473,0,0,0,1.167,3.4,4.474,4.474,0,0,0,3.291,1.444H836.354a4.474,4.474,0,0,0,3.291-1.443,4.474,4.474,0,0,0,1.167-3.4,191.756,191.756,0,0,0-4.9-31.393c-2.326-8.976-5.146-16.162-9.79-20.806-6.361-6.361-17.506-9.608-31.459-12.081S763.993-826.013,747.259-826.013Zm0,8.946c16.3,0,32.613,1.2,45.843,3.544s23.42,6.324,26.694,9.6c2.389,2.389,5.317,8.474,7.455,16.725a173.143,173.143,0,0,1,4.164,25.045H663.1a173.108,173.108,0,0,1,4.165-25.045c2.138-8.251,5.067-14.336,7.456-16.725,3.274-3.274,13.462-7.253,26.693-9.6S730.961-817.067,747.259-817.067Zm0-136.142A58.88,58.88,0,0,0,688.447-894.4a58.88,58.88,0,0,0,58.813,58.813A58.88,58.88,0,0,0,806.071-894.4,58.881,58.881,0,0,0,747.259-953.209Zm0,8.946A49.8,49.8,0,0,1,797.124-894.4a49.8,49.8,0,0,1-49.865,49.866A49.8,49.8,0,0,1,697.393-894.4,49.8,49.8,0,0,1,747.259-944.263Z'
                  transform='translate(-653.692 953.209)'
                  stroke='white'
                  fill='white'
                />
              </svg>
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
