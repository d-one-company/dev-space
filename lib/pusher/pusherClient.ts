import { env } from '@/env';
import PusherClient from 'pusher-js';

const createPusherClient = () =>
  new PusherClient(env.NEXT_PUBLIC_PUSHER_KEY, {
    cluster: env.NEXT_PUBLIC_PUSHER_CLUSTER,
  });

export default createPusherClient;
