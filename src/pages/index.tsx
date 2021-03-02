import Buttons from '@/components/homepage/Buttons';
import Download from '@/components/homepage/Download';
import Effect from '@/components/homepage/Effect';
import RedirectTip from '@/components/homepage/RedirectTip';
import PageLayout from '@/layouts/PageLayout';


export default function IndexPage() {
  return (
    <PageLayout>
      <RedirectTip />
      <Effect />
      <Buttons />
      <Download />
    </PageLayout>
  );
}
