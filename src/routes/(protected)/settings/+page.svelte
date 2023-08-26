<script lang="ts">
    import { authUser } from '$lib/stores/auth.store';
</script>

<h1>Settings</h1>
{$authUser?.email} 